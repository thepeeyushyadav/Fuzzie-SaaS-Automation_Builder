import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')

  if (!code) {
    console.error('Notion callback: no code provided')
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/connections?error=no_code`
    )
  }

  const encoded = Buffer.from(
    `${process.env.NOTION_CLIENT_ID}:${process.env.NOTION_API_SECRET}`
  ).toString('base64')

  try {
    const response = await axios.post(
      'https://api.notion.com/v1/oauth/token',
      {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.NOTION_REDIRECT_URI!,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${encoded}`,
          'Notion-Version': '2022-06-28',
        },
      }
    )

    const accessToken = response.data.access_token
    const workspaceName = response.data.workspace_name || ''
    const workspaceIcon = response.data.workspace_icon || ''
    const workspaceId = response.data.workspace_id || ''

    console.log('✅ Notion token exchanged, workspace:', workspaceName)

    // Try to find a database to pre-fill databaseId
    let databaseId = ''
    try {
      const notion = new Client({ auth: accessToken })
      const databasesPages = await notion.search({
        filter: {
          value: 'database' as any,
          property: 'object',
        },
        sort: {
          direction: 'ascending',
          timestamp: 'last_edited_time',
        },
      })
      databaseId = databasesPages?.results?.length
        ? databasesPages.results[0].id
        : ''
      console.log('✅ Notion databaseId:', databaseId)
    } catch (searchErr) {
      // Non-fatal — user may not have shared any databases yet
      console.warn('Notion database search failed (non-fatal):', searchErr)
    }

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/connections?access_token=${accessToken}&workspace_name=${encodeURIComponent(workspaceName)}&workspace_icon=${encodeURIComponent(workspaceIcon)}&workspace_id=${workspaceId}&database_id=${databaseId}`
    )
  } catch (err: any) {
    console.error(
      '❌ Notion OAuth error:',
      err?.response?.data || err?.message || err
    )
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/connections?error=notion_auth_failed`
    )
  }
}

const { Pool } = require('pg');

async function testDb() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    const res = await pool.query('SELECT NOW() as time, COUNT(*) as user_count FROM "User"');
    console.log("✅ DB Connected! Time:", res.rows[0].time);
    console.log("✅ User count in DB:", res.rows[0].user_count);
  } catch (err: any) {
    console.error("❌ DB Error:", err.message);
  } finally {
    await pool.end();
  }
}

testDb();

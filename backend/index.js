   const express = require ('express');
  const bodyParcer = require ('body-parser');
  const cors = require ('cors');
  const sql = require ('mssql/msnodesqlv8');

  const app = express();
  app.use(bodyParcer.json());
  app.use(cors());


  const config = {
    driver: 'msnodesqlv8',
    connectionString: 'Driver={SQL Server};Server=AYJLAPTOP\\SQLEXPRESS;Database=GapData1;Trusted_Connection=yes;',
      options: {
      trustedConnection: true, 
    },
  };

  sql.connect(config , (err)=>{
      if(err){
          console.log('Error:',err);
      }else{
          console.log('connected')
      }
  });

  // Start the server
  const PORT = process.env.PORT || 8090;
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });

  app.post('/api/users', async (req, res) => {
    const {
      username,
      password,
      type
    } = req.body;

    try {
      const query = `
        INSERT INTO Users (
          UserName,
          Password,
          Remark
        )
        VALUES (
          '${username}',
          '${password}',
          '${type}'
        )
      `;
  
      sql.query(query, (err) => {
        if (err) {
          console.log('Error:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          res.json({ message: 'User created successfully' });
        }
      });
    } catch (error) {
      console.error('Error hashing password:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    // Validate input (optional, depending on your requirements)
    const query = `
      SELECT * FROM Users
      WHERE UserName = '${username}'
    `;
  
    sql.query(query, (err, result) => {
      if (err) {
        console.log('Error Executing SQL query :', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        if (result.recordset.length > 0) {
          const storedPassword = result.recordset[0].Password; // Assuming password stored in plain text
  
          // Compare entered password with stored password (plain text comparison)
          if (password === storedPassword) {
            const loggedInUsername = result.recordset[0].UserName;
            res.json({ message: 'Login successful', username: loggedInUsername });
          } else {
            res.status(401).json({ error: 'Invalid credentials' });
          }
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      }
    });
  });

  app.get('/api/getusers', (req, res) => {
    const query = `SELECT * FROM Users`;
  
    sql.query(query, (err, result) => {
      if (err) {
        console.log('Error:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(result.recordset);
      }
    });
  });
  
  
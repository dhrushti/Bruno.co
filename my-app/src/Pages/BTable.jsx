import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BTable(props) {
  function createData(name, calories) {
    return { name, calories };
  }
  
  const rows1 = props.fname.map((item, index) => {
    return createData(item, props.fmail[index]);
  })
  return (
    <TableContainer component={Paper} >
      <Table aria-label="simple table" sx={{ minWidth: 650, display:'flex',justifyContent:'space-evenly',marginTop:'10rem'}}>
        {/* <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
        <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell align="right"><strong>Email</strong></TableCell>
          </TableRow>
          {rows1.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
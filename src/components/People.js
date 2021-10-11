import { useSelector } from "react-redux"
import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper  from '@material-ui/core/Paper';


const People = () => {
 
  const people = useSelector(state => state.peopleReducer.people)
       
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">BirthDay</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((man) => (
              <TableRow
                key={man.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {man.name}
                </TableCell>
                <TableCell align="right">{man.birth_year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )

}

export default People
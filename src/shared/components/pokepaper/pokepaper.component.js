import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/styles';

type Props = {
  id: number,
  name: string,
  sprite: string,
};

const PokePaperComp = (props: Props) => {
  return (
    <div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Sprite
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {props.id}  
              </TableCell>
              <TableCell>
                {props.name}
              </TableCell>
              <TableCell>
                <Avatar src={props.sprite} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

const styles = ({

});

export const PokePaper = withStyles(styles)(
  PokePaperComp
);
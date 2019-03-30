import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './CreateNewPollView.css';

class CreateNewPollView extends React.Component {
  constructor(props) {
    super(props);

    this.createNewButton = this.createNewButton.bind(this);
  }

  createNewButton(name, direction) {
    return (
      <Button name={name}
              variant="contained"
              color="secondary"
              size="large"
              fullWidth={true}
              variant="raised"
              direction={direction}
              onClick={() => this.changePage(direction)}>
        {name}
      </Button>
    );
  }

  render() {
    return(
      <div>
        <Grid>
          CreateNewPollView
        </Grid>
      </div>

    )
  }
}

export default CreateNewPollView;

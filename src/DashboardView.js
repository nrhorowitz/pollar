import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './DashboardView.css';

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.createNewButton = this.createNewButton.bind(this);
  }

  changePage(direction) {
      alert(this.props.currentView)
      if (direction === 4) {
          this.props.segueToCreateNewPollView()
      }
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
        <Grid direction="row">
          <Grid container="true">
            <Grid item="true">
              DashboardView
            </Grid>
          </Grid>

          <Grid container="true"
                direction="column">
            <Grid item>
              {this.createNewButton('+ CREATE NEW POLL', 4)}
            </Grid>
          </Grid>

          <Grid container="true"
                justify="center">
            <Grid item="true" sm>
              {this.createNewButton('MY POLLS', 1)}
            </Grid>
            <Grid item="true" sm>
              {this.createNewButton('BROWSE POLLS', 1)}
            </Grid>
          </Grid>

          <Grid container="true"
                justify="center">
            <Grid item="true" sm>
              {this.createNewButton('FOLLOWED POLLS', 1)}
            </Grid>
            <Grid item="true" sm>
              {this.createNewButton('SEARCHED POLLS', 1)}
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default DashboardView;

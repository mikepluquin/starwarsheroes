import React, { Component, Fragment } from 'react'

import Heroes from '../../components/Heroes/Heroes'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as api from '../../services/api'

class Home extends Component {
  state = {
    heroes: [],
    loading: false,
    page: 1
  }

  componentDidMount() {
    const params = {
      page: this.state.page
    }
    this.fetchPeoples(params)
  }

  fetchPeoples(params) {
    this.setState({
      loading: true
    })
    api.fetchPeoples(params)
      .then((response) => {
        this.setState({
          heroes: response.data,
          loading: false
        })
      }).catch((error) => {
        alert(error)
        this.setState({
          loading: false
        })
      })
  }

  onLoadMore() {
    const params = {
      page: this.state.page + 1
    }
    this.fetchPeoples(params)
  }

  render() {
    let spinner = null
    if (this.state.loading) {
      spinner = <Spinner />
    }

    let content = (
      <Fragment>
        <p>No heroes !</p>
        {spinner}
      </Fragment>
    )

    if (this.state.heroes) {
      content = (
        <Fragment>
          <Heroes heroes={this.state.heroes} />
          {spinner}
          <Button disabled={this.state.loading} clicked={this.onLoadMore}>
            Load more
          </Button>
        </Fragment>
      )
    }

    return content
  }
}

export default Home
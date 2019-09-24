import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Heroes from '../../components/Heroes/Heroes'
import Search from '../../components/Search/Search'
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
    this.fetchPeoples()
  }

  fetchPeoples(params = {}, append = false) {
    this.setState({
      loading: true
    })

    // prepare params
    let newPage = 1
    if (append) {
      newPage = this.state.page + 1
    }
    params.page = newPage

    if(this.props.wookieMode){
      params.format = "wookiee"
    }

    api.fetchPeoples(params).then((response) => {
      // format the result
      const newHeroes = response.data.map(hero => {
        // hero id is the last part of its url
        // e.g. : url is "https://swapi.co/api/people/1/" , id will be 1
        const parsedUrl = hero.url.split("/")
        hero.id = parsedUrl[parsedUrl.length - 2]
        return hero
      })

      let updatedHeroes = []
      // append to the current results
      if (append) {
        updatedHeroes = this.state.heroes.concat(newHeroes)
      }
      // replace the current results
      else {
        updatedHeroes = newHeroes
      }
      this.setState({
        heroes: updatedHeroes,
        loading: false,
        page: newPage
      })
    }).catch((error) => {
      alert(error)
      this.setState({
        loading: false,
        page: newPage
      })
    })
  }

  onLoadMore() {
    this.fetchPeoples()
  }

  onSearch(terms) {
    const params = {
      search: terms
    }
    this.fetchPeoples(params, true)
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

    return (
      <Fragment>
        <Search submitted={(terms) => this.onSearch(terms, true)} />
        {content}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    wookieMode: state.wookieMode
  }
}

export default connect(mapStateToProps)(Home)
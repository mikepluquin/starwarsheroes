import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Heroes from '../../components/Heroes/Heroes'
import Button from '../../components/UI/Button/Button'
import Icon from '../../components/UI/Icon/Icon'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as api from '../../services/api'

class Home extends Component {
  state = {
    heroes: null,
    loading: false,
    page: 1
  }

  componentDidMount() {
    this.fetchHeroes()
  }

  fetchHeroes(params = {}, append = false) {
    this.setState({
      loading: true
    })

    // prepare params
    let newPage = 1
    if (append) {
      newPage = this.state.page + 1
    }
    params.page = newPage

    if (this.props.wookieMode) {
      params.format = "wookiee"
    }

    api.fetchPeoples(params).then((response) => {
      // format the result
      const newHeroes = response.data.results.map(hero => {
        // hero id is the last part of its url
        // e.g. : url is "https://swapi.co/api/people/1/" , id will be 1
        const parsedUrl = hero.url.split("/")
        hero.id = parseInt(parsedUrl[parsedUrl.length - 2])
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
      console.log(error)
      this.setState({
        loading: false,
        page: newPage
      })
    })
  }

  onLoadMore() {
    this.fetchHeroes({}, true)
  }

  onSearch(terms) {
    const params = {
      search: terms
    }
    this.fetchHeroes(params)
  }

  render() {
    let spinner = null
    if (this.state.loading) {
      spinner = (
        <div className="text-center mb-3 mt-2">
          <Spinner size="xl" />
        </div>
      )
    }

    // no search done yet
    let content = spinner

    if (this.state.heroes && Array.isArray(this.state.heroes)) {
      // no results found
      if (this.state.heroes.length <= 0) {
        content = (
          <div className="d-flex align-items-center justify-content-center text-md">
            <Icon type="stormtrooper" size="lg" />
            <span className="ml-3">
              This is not the hero you are looking for
            </span>
          </div>
        )
      }
      // results found
      else {
        content = (
          <Fragment>
            <div className="row">
              <div className="col-12">
                <Heroes heroes={this.state.heroes} />
              </div>
            </div>

            <div className="row mt-2 mb-2">
              <div className="col-12 text-center">
                {spinner}
                <Button 
                classesName={["btn-xs-block"]}
                disabled={this.state.loading} 
                clicked={() => this.onLoadMore()}>
                  Load more
                </Button>
              </div>
            </div>
          </Fragment>
        )
      }
    }

    return (
      <div className="container">
        {content}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    wookieMode: state.wookieMode
  }
}

export default connect(mapStateToProps)(Home)
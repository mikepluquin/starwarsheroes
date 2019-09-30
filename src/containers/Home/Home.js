import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../../store/actionCreators'
import Heroes from '../../components/Heroes/Heroes'
import Button from '../../components/UI/Button/Button'
import Icon from '../../components/UI/Icon/Icon'
import Spinner from '../../components/UI/Spinner/Spinner'

class Home extends Component {
  componentDidMount() {
    this.props.onFetchHeroes(this.props.params)
  }

  onLoadMore() {
    const updatedPage = this.props.params.page + 1
    const updatedParams = {
      ...this.props.params,
      page: updatedPage
    }
    this.props.onSetParams(updatedParams)
    this.props.onFetchHeroes(updatedParams)
  }

  render() {
    // prepare spinner
    let spinner = null
    if (this.props.loading) {
      spinner = (
        <div className="text-center mb-3 mt-2">
          <Spinner size="xxl" />
        </div>
      )
    }

    // no search done yet
    let content = spinner

    // error 
    if (this.props.error) {
      content = (
        <Fragment>
          {spinner}
          <div className="d-flex align-items-center justify-content-center text-md">
            <Icon type="stormtrooper" size="lg" />
            <span className="ml-3">
              Oops, something went wrong !
            </span>
          </div>
        </Fragment>
      )
    }

    // no error
    else {
      if (this.props.heroes && Array.isArray(this.props.heroes)) {
        // no results found
        if (this.props.nbResults === 0) {
          content = (
            <Fragment>
              {spinner}
              <div className="d-flex align-items-center justify-content-center text-md">
                <Icon type="stormtrooper" size="lg" />
                <span className="ml-3">
                  This is not the hero you are looking for
                </span>
              </div>
            </Fragment>
          )
        }

        // results found
        else {
          content = (
            <Fragment>
              <div className="row">
                <div className="col-12">
                  <Heroes heroes={this.props.heroes} />
                </div>
              </div>

              <div className="row mt-2 mb-2">
                <div className="col-12 text-center">
                  {spinner}
                  {
                    // show load more button only if results are remaining
                    this.props.heroes.length < this.props.nbResults
                    && <Button
                      classesName={["btn-xs-block"]}
                      disabled={this.props.loading}
                      clicked={() => this.onLoadMore()}>
                      Load more
                    </Button>
                  }
                </div>
              </div>
            </Fragment>
          )
        }
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
    params: state.params,
    loading: state.loading,
    heroes: state.heroes,
    error: state.error,
    nbResults: state.nbResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchHeroes: (params) => dispatch(actionCreators.fetchHeroesInit(params)),
    onSetParams: (params) => dispatch(actionCreators.setParams(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
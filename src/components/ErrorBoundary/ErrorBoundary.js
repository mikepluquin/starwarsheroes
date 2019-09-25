// https://fr.reactjs.org/docs/error-boundaries.html
import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
    return {
      hasError: true
    }
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.
    // logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return (
        <div id="layout" className="layout-error">
          <main>
            <div className="h-100 d-flex align-items-center justify-content-center">
              <h1>
                Oops, something went wrong !
              </h1>
            </div>
          </main>
        </div >
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
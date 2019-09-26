import React, { memo } from 'react'

const footer = props => {
  return (
    <footer className="pr-5 pl-5 pt-2 pb-2 bg-black text-light text-center text-xs d-flex flex-column">
          <div>
            Made by&nbsp;
            <a href="https://mikepluquin.dev">
              Mike
            </a>
          </div>

          <div>
            uses&nbsp;
            <a href="https://swapi.co/">
              the&nbsp;SWAPI
            </a>
          </div>
    </footer >
  )
}

export default memo(footer)
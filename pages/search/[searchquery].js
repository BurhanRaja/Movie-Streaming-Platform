import React from 'react'

function SearchedKeysDisplay({searchQuery}) {
  return (
    <div>
        {searchQuery}
    </div>
  )
}

SearchedKeysDisplay.getInitialProps = async ({query}) => {
    return {
        searchQuery: query.searchquery
    }
}

export default SearchedKeysDisplay

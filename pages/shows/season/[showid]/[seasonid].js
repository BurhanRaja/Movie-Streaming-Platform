import React from 'react'
import Episodes from '../../../../components/shows/Episodes';
import Layout from '../../../../components/Layout';

function Season({showId, seasonId}) {
  return (
    <Layout>
      <Episodes id={showId} seasonNo={seasonId} sliderEnable={false} />
    </Layout>
  )
}

Season.getInitialProps = async ({query}) => { 
    return {
      showId: String(query.showid),
      seasonId: String(query.seasonid)
    };
  }

export default Season;

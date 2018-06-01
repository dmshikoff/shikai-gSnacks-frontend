import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { CardDeck } from 'reactstrap';
import Snack from './Snack'

const SnackList = ({snackData, handleCardShow}) => {
  const Snacks = snackData.map(snack => {
    return (
      <Snack
        key={snack.id}
        snack={snack}
        handleCardShow={handleCardShow}
      />
    )
  })

    return (
      <CardDeck>
        {Snacks}
      </CardDeck>

    )
}

export default SnackList

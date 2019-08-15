import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div>
    <Button animated>
      <Button.Content visible>Sneak Peak tomorrow's photo</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    <Button animated='fade'>
      <Button.Content visible>Sign-up for the Nasa Magazine</Button.Content>
      <Button.Content hidden>$3.99 a month</Button.Content>
    </Button>
  </div>
)

export default ButtonExampleAnimated
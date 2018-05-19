import React from 'react'
import { string, element, func, arrayOf } from 'prop-types'
import Watext from './watext'
import VerbBar from './verb-bar'
import { verbShape } from '../property-shapes'
import './interactive-description.css'

export default class InteractiveDescription extends React.Component {
  static propTypes = {
    title: string,
    emptyText: string,
    watext: element,
    verbs: arrayOf(verbShape),
    onItemClick: func, // (item-id)
    onVerbClick: func, // (item-id, verb-id)
  }

  static defaultProps = {
    emptyText: 'No text',
  }

  render () {
    return <div styleName="root">
      <div styleName="content">
        <div styleName="description">
          <Watext {...this.props} onItemClick={this.props.onItemClick} />
        </div>
        <div styleName="verb-bar">
          <VerbBar verbs={this.props.verbs} />
        </div>
      </div>
    </div>
  }
}
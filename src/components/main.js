import React from 'react'
import FlexBox from 'flexbox-react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faHeart, faEnvelope, faSpinner} from '@fortawesome/fontawesome-free-solid/'

import AlbumView from './albumview'
import data from '../data/content.json'
import '../css/index.css'


class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            data: data
        }

        this.show = { opacity: 1 }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            })
        }, 2000)
    }
    getTimestamp() {
        return Math.round((new Date()).getTime() / 1000)
    }
    selectAlbum(index) {
        this.setState({
            selected: this.state.data[index]
        })
    }
    render() {
        const { error, loaded, selected, data } = this.state

        if(error) {
            return <div>Error: {error.message}</div>
        } else if(!loaded) {
            return (
                <FlexBox className="loader" minHeight="100vh" minWidth="100vw" alignItems="center" justifyContent="center">
                    <FlexBox>
                        <FontAwesomeIcon icon={faSpinner} spin/>
                    </FlexBox>
                </FlexBox>
            )
        } else {
            return (
                <FlexBox flexDirection="column" minWidth="682px" maxWidth="100vw" className="main">
                    <FlexBox element="header">
                        <img src={require('../images/moosefrog-logo.png')} alt="Moosefrog" className="logo"/>
                    </FlexBox>
                    <FlexBox flexDirection="row" flexWrap="wrap" element="main">
                        {data.map((item, index) => {
                            return <FlexBox flexGrow={1} key={index}><img src={require('../images/' + item.image + ".jpg")} alt={item.name} className="album" onClick={() => this.selectAlbum(index)}/></FlexBox>
                        })}
                    </FlexBox>
                    <FlexBox element="footer" className="footer">
                        <a href="https://www.facebook.com/moosefrog/"><FontAwesomeIcon icon={faHeart}/></a>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </FlexBox>
                    <AlbumView album={selected} timestamp={this.getTimestamp()} />
                </FlexBox>
            )
        }
    }
}

export default Main
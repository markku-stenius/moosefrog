import React from 'react'
import FlexBox from 'flexbox-react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faShoppingCart, faCloudDownloadAlt} from '@fortawesome/fontawesome-free-solid/'

class AlbumView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            album: this.props.album,
            show: false,
            timestamp: this.props.timestamp
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.timestamp === null || JSON.stringify(this.props.timestamp) !== JSON.stringify(prevProps.timestamp)) {
            this.setState({
                album: this.props.album,
                show: true
            })
        }
    }
    closeModal() {
        this.setState({
            show: false
        })
    }
    render() {
        const {album, show} = this.state
        this.closeModal = this.closeModal.bind(this)
        if (show) {
            return (
                <div className="backdrop" onClick={this.closeModal}>
                    <FlexBox flexDirection="row" className="modal">
                        <FlexBox element="main" flexGrow={1} maxWidth="50vw">
                            <FlexBox className="album-description" flexDirection="column" justifyContent="flex-end">
                                <h1>{album.name}</h1>
                                <p className="album-credentials">{album.description.split("\n").map((item, index) => {
                                    return <p key={index}>{item}</p>
                                })}</p>
                            </FlexBox>
                        </FlexBox>
                        <FlexBox flexGrow={1} maxWidth="60vw">
                            <iframe width="500" height="400" scrolling="no" frameborder="no" allow="autoplay" title={album.name} src={album.embed} className="embed"></iframe>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox element="footer" className="footer" justifyContent="center" onClick={null}>
                        {album.buy !== "" && <a href={album.buy}><FontAwesomeIcon icon={faShoppingCart} legend="Buy"/></a>}
                        {album.download !== "" && <a href={album.download}><FontAwesomeIcon icon={faCloudDownloadAlt} legend="Download"/></a>}
                    </FlexBox>
                </div>
            )
        } else {
            return null
        }
    }
}
export default AlbumView
import * as React from 'react';
import {connect} from 'react-redux';
import {fetchStreams as fetchStreamsAction} from './../actions/actions';

class StreamList extends React.Component {
    renderList = ({streams}) => {
        return Object.keys(streams).map((key) => {
            return (
                <div className='item' key={key}>
                    <div className="right floated content">
                        <button className='ui button'>Edit</button>
                    </div>
                    <i className='large forward middle aligned icon red'/>
                    <div className='content'>
                        <div className="header"><h4>{streams[key].title}</h4></div>
                        <div className="description">{streams[key].description}</div>
                    </div>
                </div>
            )
        });
    }

    componentDidMount() {
        this.props.fetchStreamsAction();
    }

    render() {
        return (
            <div className='ui relaxed divided list container'>{this.renderList(this.props)}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: state.streams
    }
}

export default connect(mapStateToProps, {fetchStreamsAction})(StreamList);
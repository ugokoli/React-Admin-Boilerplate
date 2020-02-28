import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import {ApplicationState} from "../../../store/reducers";
import {appActionCreators} from "../../../store/actions";
import {WeatherForecastsState} from "../../../store/reducers/WeatherForecasts.reducer";

type TellerProps =
    WeatherForecastsState
    & typeof appActionCreators
    & RouteComponentProps<{}>;


class Device extends React.PureComponent<TellerProps> {
    public componentDidMount() {
    }

    public componentDidUpdate() {
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">Teller</h1>
                <p>Teller management.</p>
            </React.Fragment>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.weatherForecasts,
    appActionCreators
)(Device as any);

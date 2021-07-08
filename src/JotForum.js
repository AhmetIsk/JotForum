import { render } from 'preact' 
import App from './App';
import {h} from 'preact';
import { FetchData } from './fetchData';
export const JotForum = ({ apiKey, page}) => {
    return (
            <FetchData>
                <App apiKey= {apiKey} page={page}/>
            </FetchData>
            );
    };

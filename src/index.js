import { render } from 'preact' 
import App from './App';
import {h} from 'preact';
import { FetchData } from './fetchData';
export default class JotForum {
    constructor(address, apiKey, page) {
        console.log(apiKey);

        render(
            <FetchData>
                <App apiKey= {apiKey} page={page}/>
            </FetchData>, 
        address);
    };
}

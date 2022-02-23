import LightningElementWithBootstrap from '../../lib/lightningElementWithBootstrap';
import {api} from 'lwc'
export default class Jobcard extends LightningElementWithBootstrap {
    @api job = {}
}
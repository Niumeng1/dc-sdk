/*
 * @Author: Caven
 * @Date: 2020-01-02 14:26:35
 * @Last Modified by: Caven
 * @Last Modified time: 2020-03-02 21:36:23
 */
import Cesium from '@/namespace'
import Event from './Event'

class ViewerEvent extends Event {
  constructor() {
    super()
    this._registerEvent()
  }

  _registerEvent() {
    // mouse event
    for (let key in DC.MouseEventType) {
      let type = DC.MouseEventType[key]
      this._eventCache[type] = new Cesium.Event()
    }

    //viewer event
    for (let key in DC.ViewerEventType) {
      let type = DC.ViewerEventType[key]
      this._eventCache[type] = new Cesium.Event()
    }
  }
}

export default ViewerEvent

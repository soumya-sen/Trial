import Reflux from 'reflux';

import AccountSnapshotPerformanceActions from '../actions/accountsnapshotperformanceactions.js';

var _accountSnapshotData = {
  irrDetail: {}
};

const AccountSnapshotPerformanceStore = Reflux.createStore({
  init: function(){
    this.listenToMany(AccountSnapshotPerformanceActions);
  },

  onGetAccountSnapshotPerformanceCompleted: function(data) {
    _accountSnapshotData.irrDetail = data.detail;

    this.trigger(_accountSnapshotData);
  },

  onGetAccountSnapshotPerformanceFailed: function() {
    console.log('Failed to Load Account Snapshot Performance Data.');
  },

  get accountSnapshotPerformance(){
    return _accountSnapshotData;
  },
<<<<<<< HEAD

get accountSnapshotPerformance3(){
    return _accountSnapshotData3;
=======
  
   get accountSnapshotPerformance2(){
    return _accountSnapshotData2;
>>>>>>> 523fe06b338402930c8ba193bf81b0b14704eaf9
  }
                                                           
});
export default AccountSnapshotPerformanceStore;

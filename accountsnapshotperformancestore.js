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
  }
});

export default AccountSnapshotPerformanceStore;

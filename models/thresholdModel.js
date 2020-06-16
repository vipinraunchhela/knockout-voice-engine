function AppViewModel() {
  
    var self = this;
  
    self.addRule = ko.observable(false);
    self.showSearch = ko.observable(false);
    self.showSelectOptions = ko.observable(false);
    self.prioritypopover = ko.observable(false);
    this.showSelectionTag = ko.observable(false);
    self.show =  ko.observable(false);
    self.showLevelForm = ko.observable(false);
    self.showEmpty = ko.observable(true);
    self.showFilter = ko.observable(false);
    self.showNoData = ko.observable(true);
    self.showTableData = ko.observable(false);
    self.radioSelectedOptionValue = ko.observable("singleNumber");
    
      self.showBox = function(){
              self.show(true);
       };
       $("body").on("click", function(){
           self.show(false);
       });
    
    this.myAction= function() {
       return true;
    }  
    self.showFilterList = function () {
      self.showFilter(!self.showFilter());
  };
    self.showRule = function () {
        self.addRule(true);
    }
    self.hideRule = function () {
      self.addRule(false);
  }
    self.verifyPriority = function(){
      self.prioritypopover(true);
    }
    self.setPriority = function(){
      self.prioritypopover(false);
    }
    self.showSearchList = function () {
        self.showSearch(true);
    }
    self.showDropList = function(){
      self.showSelectOptions(true);
    }
    self.showForm = function(){
      self.showLevelForm(true);
      self.showEmpty(false);
    }
    self.showTable = function(){
      self.showLevelForm(false);
      self.showEmpty(true);
      self.showNoData(false);
      self.showTableData(true);
    }
      this.counters = ko.observable([
        {
          'name': 'Specific A to Specific B',
          'checked': false
        },
        {
          'name': 'Specific A to Group B',
          'checked': false
        },
        {
          'name': 'Group A to Specif B',
          'checked': false
        },
        {
          'name':  'Group A to Group B',
          'checked': false
        }
      ])
      this.items = ko.observableArray([
          {
            id: 1,
            thresholdName: 'A1-2233',
            editedBy: 'John Darsey',
            originatingCalls : '3 Levels',
            terminatingCalls : '2 Levels',
            originatingDuration: '2 Levels',
            terminatingDuration: '2 Levels',
            editedDate: '15-may-2020',
          },
          {
            id: 2,
            thresholdName: 'A1-2233',
            editedBy: 'Vipin',
            originatingCalls : '3 Levels',
            terminatingCalls : '2 Levels',
            originatingDuration: '2 Levels',
            terminatingDuration: '2 Levels',
            editedDate: '15-may-2020',
          },
          {
            id: 3,
            thresholdName: 'A1-2233',
            editedBy: 'Modi',
            originatingCalls : '3 Levels',
            terminatingCalls : '2 Levels',
            originatingDuration: '2 Levels',
            terminatingDuration: '2 Levels',
            editedDate: '15-may-2020',
          }
      ]);

      this.levelItems = ko.observableArray([
        {
          id: 1,
          level: 'Level 1',
          threshold: '80%',
          adminAction : 'SMS To subscriber',
          announcement : 'yes',
          callAction: 'CA-4454',
        },
        {
          id: 2,
          level: 'Level 1',
          threshold: '80%',
          adminAction : 'SMS To subscriber',
          announcement : 'yes',
          callAction: 'CA-4454',
        },
        {
          id: 3,
          level: 'Level 1',
          threshold: '80%',
          adminAction : 'SMS To subscriber',
          announcement : 'yes',
          callAction: 'CA-4454',
        }
    ]);
  
          this.allowanceList = ko.observableArray([
          {
            id: 1,
            templatesName: 'A1-1100',
          },
          {
            id: 2,
            templatesName: 'A2-1780',
          },
          {
            id: 3,
            templatesName: 'A3-1890',
          },
          {
            id: 4,
            templatesName: 'A4-1109',
          },
          {
            id: 5,
            templatesName: 'A5-1156',
          },
          {
            id: 6,
            templatesName: 'A6-1179',
          }
          ]);
          this.thresholdList = ko.observableArray([
          {
            id: 11,
            templatesName: 'b1-1100',
          },
          {
            id: 22,
            templatesName: 'b2-1780',
          },
          {
            id: 33,
            templatesName: 'b3-1890',
          },
          {
            id: 44,
            templatesName: 'b4-1109',
          },
          {
            id: 55,
            templatesName: 'B5-1156',
          },
          {
            id: 60,
            templatesName: 'B6-1179',
          }
        ]);
        
    }
  
  
  // Activates knockout.js
  ko.applyBindings(new AppViewModel());
  
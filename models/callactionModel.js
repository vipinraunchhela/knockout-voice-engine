function AppViewModel() {
  
    var self = this;
  
    self.addRule = ko.observable(false);
    self.showSearch = ko.observable(false);
    self.showSelectOptions = ko.observable(false);
    self.prioritypopover = ko.observable(false);
    this.showSelectionTag = ko.observable(false);
    self.show =  ko.observable(false);
    self.showFilter = ko.observable(false);
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
              callActionName: 'CA-1233',
              editedBy: 'John Darsey',
              callAction: 'Continue:80%, Connect to Voice Mail: 20%',
              editedDate: '15-may-2020',
          },
          {
            id: 2,
            callActionName: 'CA-1233',
            editedBy: 'John Darsey',
            callAction: 'Continue:80%, Connect to Voice Mail: 20%',
            editedDate: '15-may-2020',
          },
          {
            id: 3,
            callActionName: 'CA-1233',
            editedBy: 'John Darsey',
            callAction: 'Continue:80%, Connect to Voice Mail: 20%',
            editedDate: '15-may-2020',
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
  
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var App = require('app');

App.MainAdminView = Em.View.extend({
  templateName: require('templates/main/admin'),
  selectedBinding: 'controller.category',
  categories: function() {
    var items = [{
      name: 'user',
      url: 'adminUser',
      label: Em.I18n.t('common.users')
    }];
    if (App.get('isHadoop2Stack') && App.supports.highAvailability) {
      items.push({
        name: 'highAvailability',
        url: 'adminHighAvailability',
        label: Em.I18n.t('admin.highAvailability')
      });
    }
    if (App.supports.secureCluster) {
      items.push({
        name: 'security',
        url: 'adminSecurity.index',
        label: Em.I18n.t('common.security')
      });
    };
    items.push({
      name: 'cluster',
      url: 'adminCluster',
      label: Em.I18n.t('common.cluster')
    });
    items.push({
      name: 'userSettings',
      url: 'adminUserSettings',
      label: Em.I18n.t('common.userSettings')
    });
    items.push({
      name: 'misc',
      url: 'adminMisc',
      label: Em.I18n.t('common.misc')
    });
    return items;
  }.property(''),

  NavItemView: Ember.View.extend({
    tagName: 'li',
    classNameBindings: 'isActive:active'.w(),
    isActive: function () {
      return this.get('item') === this.get('parentView.selected');
    }.property('item', 'parentView.selected')
  })
});


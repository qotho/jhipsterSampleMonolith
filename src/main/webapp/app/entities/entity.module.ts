import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleMonolithRegionModule } from './region/region.module';
import { JhipsterSampleMonolithCountryModule } from './country/country.module';
import { JhipsterSampleMonolithLocationModule } from './location/location.module';
import { JhipsterSampleMonolithDepartmentModule } from './department/department.module';
import { JhipsterSampleMonolithTaskModule } from './task/task.module';
import { JhipsterSampleMonolithEmployeeModule } from './employee/employee.module';
import { JhipsterSampleMonolithJobModule } from './job/job.module';
import { JhipsterSampleMonolithJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterSampleMonolithRegionModule,
        JhipsterSampleMonolithCountryModule,
        JhipsterSampleMonolithLocationModule,
        JhipsterSampleMonolithDepartmentModule,
        JhipsterSampleMonolithTaskModule,
        JhipsterSampleMonolithEmployeeModule,
        JhipsterSampleMonolithJobModule,
        JhipsterSampleMonolithJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleMonolithEntityModule {}

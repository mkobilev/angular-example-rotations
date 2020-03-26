import { ModuleWithProviders, NgModule } from '@angular/core';


@NgModule({
    imports: [

    ],
    providers: [

    ]
})
export class CoreModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}

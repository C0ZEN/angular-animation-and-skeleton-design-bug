import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import localForage from "localforage";
import { TranslocoModule } from "@ngneat/transloco";
import {
  PERSIST_TRANSLATIONS_STORAGE,
  TranslocoPersistTranslationsModule
} from "@ngneat/transloco-persist-translations";
import {
  cookiesStorage,
  TranslocoPersistLangModule,
  TRANSLOCO_PERSIST_LANG_STORAGE
} from "@ngneat/transloco-persist-lang";
import { TranslocoMessageFormatModule } from "@ngneat/transloco-messageformat";
import { TranslocoHttpLoader } from "./loaders/transloco-http-loader";
import { HttpClientModule } from "@angular/common/http";

const i18nLocalForage: LocalForage = localForage.createInstance({
  description: "storage for the translation files",
  driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE, localForage.WEBSQL],
  name: "app_i18n",
  size: 4980736,
  storeName: "app_i18n",
  version: 1.0
});

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoModule,
    TranslocoPersistTranslationsModule.init({
      loader: TranslocoHttpLoader,
      storage: {
        provide: PERSIST_TRANSLATIONS_STORAGE,
        useValue: i18nLocalForage
      },
      storageKey: "app_i18n",
      ttl: 3600
    }),
    TranslocoPersistLangModule.init({
      storage: {
        provide: TRANSLOCO_PERSIST_LANG_STORAGE,
        useValue: cookiesStorage()
      }
    }),
    TranslocoMessageFormatModule.init({
      locales: "en-EN"
    }),
    RouterModule.forRoot(
      [
        {
          loadChildren: () =>
            import("./error/error.module").then(m => m.ErrorModule),
          path: "error"
        },
        {
          loadChildren: () =>
            import("./home/home.module").then(m => m.HomeModule),
          path: "home"
        },
        {
          path: "**",
          redirectTo: "home"
        }
      ],
      {
        paramsInheritanceStrategy: "always"
      }
    )
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

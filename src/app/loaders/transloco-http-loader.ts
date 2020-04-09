import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { Observable } from "rxjs";
import cacheBusting from "../../assets/i18n-cache-busting.json";

@Injectable({
  providedIn: "root"
})
export class TranslocoHttpLoader implements TranslocoLoader {
  public constructor(
    private readonly httpClient: HttpClient
  ) {}

  public getTranslation(lang: Readonly<string>): Observable<Translation> {
    let version: string = cacheBusting[lang];
    let i18nUrl: string;

    i18nUrl = `./assets/i18n/${lang}.json?v=${version}`;

    return this.httpClient.get<Translation>(i18nUrl);
  }
}

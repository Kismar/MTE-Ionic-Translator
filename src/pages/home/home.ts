import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';
import { HistoryProvider } from '../../providers/history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(
    public navCtrl: NavController,
    private translationService: TranslationProvider,
    private historyProvider: HistoryProvider
  ) {
    
  }

  public translated = '';
  public uinput = '';
  public btnTranslate(input: string): void {
    console.log(input);
    this.translationService.getTranslation(input).subscribe(
      (response) => {
        console.log(response.responseData.translatedText);
        this.uinput = input;
        this.translated = response.responseData.translatedText;
        this.historyProvider.saveToStorage(this.uinput, this.translated);
      }
    )
  }
}

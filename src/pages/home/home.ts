import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(
    public navCtrl: NavController,
    private translationService: TranslationProvider) {
    
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
      }
    )
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CALCULADORA FERRETERA';
  finalPrice = 0;
  finalWeight = 0;
  finalFirstUnit = '';
  finalSecondUnit = '';

  priceCalculator = new FormGroup({
    firstUnit: new FormControl(''),
    firstBaseWeight: new FormControl('', Validators.required),
    firstBasePrice: new FormControl('', Validators.required),
    firstCurrentWeight: new FormControl('', Validators.required),
  });

  weightCalculator = new FormGroup({
    secondUnit: new FormControl(''),
    secondBaseWeight: new FormControl('', Validators.required),
    secondBasePrice: new FormControl('', Validators.required),
    secondCurrentPrice: new FormControl('', Validators.required),
  });

  calculatePrice() {
    const baseWeight = parseFloat(
      this.priceCalculator.value.firstBaseWeight as string
    );
    const basePrice = parseFloat(
      this.priceCalculator.value.firstBasePrice as string
    );
    const currentWeight = parseFloat(
      this.priceCalculator.value.firstCurrentWeight as string
    );

    this.finalFirstUnit = this.priceCalculator.value.firstUnit as string;
    this.finalPrice = (currentWeight * basePrice) / baseWeight;
  }

  calculateWeight() {
    const baseWeight = parseFloat(
      this.weightCalculator.value.secondBaseWeight as string
    );
    const basePrice = parseFloat(
      this.weightCalculator.value.secondBasePrice as string
    );
    const currentPrice = parseFloat(
      this.weightCalculator.value.secondCurrentPrice as string
    );

    this.finalSecondUnit = this.weightCalculator.value.secondUnit as string;
    this.finalWeight = (currentPrice * baseWeight) / basePrice;
  }

  writeFirstUnit() {
    this.finalFirstUnit = this.priceCalculator.value.firstUnit as string;
  }

  writeSecondUnit() {
    this.finalSecondUnit = this.weightCalculator.value.secondUnit as string;
  }
}

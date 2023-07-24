import { TestBed } from '@angular/core/testing';

import { BusinessCardService } from './business-card.service';

describe('BusinessCardService', () => {
  let service: BusinessCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessCardService);
  });

  /**
 * 
 * 
  base64Data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAA10dzkAAAgAElEQVR4XpS9C5NeuXEk2mw+NORQD0fc/dMr37V3bVmyJO/9gd7da8kzw5kh2VxkVSWQyFM4TXUEg93fdx5AoR6JeuHF//vbv//y8vHx4fPDlwf8fPny5eHFixfxO/+PP+rnMS+L7x5fvqx7nh6+PNUXcu2Lx3HN+Pjz56cH/P7y8eV8Jt6jPy/kufj8scaA35/Gtfgb/49f5hg5Pn1WN+YY77jPn8v38/mcF573lJcf6ZDXPg6CjX/dz4unfX5P+feXQWu+h+OJ94+pBU2VfuNvroeOJ54j9Cadfd1ifLj2yz4WPJPv64be0RPv5/N4D57rn/nzyC86DtzD9dDrY/6DDhfeKF7oeBP38PrneFffxWtJs8HBk9aPg085XsqFrpnOGXz5+WlcNeVmzG3Mz/m3ozOvwRjm2oHFwatjfV2m8I4vkKOXjw/7io57gh8ptxhD0oVrHzQXmdJ5Qf7HC5MvZaDOB7h/SPCmI3h5t25Ks/nYF582HaBjcl7qeATylvMCnXKd+KO84PQ+6YXJy8HfOvtuxdpVvHyocvhYMvj05VP7wJxLKr9Xr17Naz5//nwZz2Ppju5B1J+gT9BBprKto6hdv24nJmQ7H/I0dJfyKJ/n9KIMYJxTJofiwDp+GvLF8eu6rjVP/lN98Qg+//hpyJJqxfW70tn141zXZ+xZvLNsQ8uvG3/1+nTnwV325rrgPTUPt1tPQ4/iO52P68AY56AHfqgXQMfPwrdB/4P+5BxVb9Bu6Pg7OmKNxurFZS/GAnX8RD3D65KWOadOriavNMz8BNtWa3LRQbJWvFWf/3IQgDz1NGQo6FXyhet0fvo5dPHJXq73YD5L56gNeXoaHF529qXIseMD0E/5XMferfnOWzn+vG7HEZB3txeBuUSjd+vwAgAwvmgI26zNBhwAADFpByN63w…"
 
 */

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

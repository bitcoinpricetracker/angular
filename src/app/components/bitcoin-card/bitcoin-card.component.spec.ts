import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinCardComponent } from './bitcoin-card.component';

describe('BitcoinCardComponent', () => {
  let component: BitcoinCardComponent;
  let fixture: ComponentFixture<BitcoinCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

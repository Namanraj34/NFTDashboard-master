import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseWalletComponent } from './metaverse-wallet.component';

describe('MetaverseWalletComponent', () => {
  let component: MetaverseWalletComponent;
  let fixture: ComponentFixture<MetaverseWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaverseWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaverseWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

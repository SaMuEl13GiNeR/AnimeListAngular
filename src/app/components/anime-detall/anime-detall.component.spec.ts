import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDetallComponent } from './anime-detall.component';

describe('AnimeDetallComponent', () => {
  let component: AnimeDetallComponent;
  let fixture: ComponentFixture<AnimeDetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeDetallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

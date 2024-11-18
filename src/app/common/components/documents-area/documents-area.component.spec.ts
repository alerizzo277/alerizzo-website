import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsAreaComponent } from './documents-area.component';

describe('DocumentsAreaComponent', () => {
  let component: DocumentsAreaComponent;
  let fixture: ComponentFixture<DocumentsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentsAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

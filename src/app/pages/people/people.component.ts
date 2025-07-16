import { Component } from '@angular/core';
import { StarWarsService } from '../../core/services/star-wars.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { PeopleResponse } from '../../shared/models/people.interface';
import { PersonDetail, PersonProperties } from '../../shared/models/person-detail.interface';
import { LoaderService } from '../../core/services/loader.service';

@Component({
  selector: 'app-people',
  imports: [CommonModule, CardComponent, ModalComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {
  resources: any[] = [];
  filteredResources: any[] = [];
  currentPage = 1;
  totalPages = 0;
  searchTerm = '';
  modalVisible = false;
  selectedPerson: PersonDetail | null = null;

  constructor(private swService: StarWarsService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources(): void {
    this.loaderService.show();
    this.swService.getPeople(this.currentPage).subscribe({
      next: (res: PeopleResponse) => {
        this.resources = res.results;
        this.filteredResources = [...this.resources];
        this.totalPages = res.total_pages;
      },
      error: (err) => console.error(err),
      complete: () => this.loaderService.hide()
    });
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    this.searchTerm = value;
    this.filteredResources = this.resources.filter(r =>
      r.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  changePage(page: number) {
    console.log(page, 'new page');
    this.currentPage = page;
    this.loadResources();
  }

  viewPersonDetails(uid: string) {
    this.loaderService.show();
    this.swService.getPersonById(uid).subscribe({
      next: (res) => {
        this.selectedPerson = res.result;
        this.modalVisible = true;
      },
      error: (err) => console.error(err),
      complete: () => this.loaderService.hide()
    }

    );
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedPerson = null;
  }
}

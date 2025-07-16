import { Component } from '@angular/core';
import { StarWarsService } from '../../core/services/star-wars.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { PeopleResponse } from '../../shared/models/people.interface';
import { PersonDetail, PersonProperties } from '../../shared/models/person-detail.interface';

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

  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources(): void {
    console.log('load resources');
    this.swService.getPeople(this.currentPage).subscribe((res: PeopleResponse) => {
      this.resources = res.results;
      this.filteredResources = [...this.resources];
      this.totalPages = res.total_pages;
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
    this.swService.getPersonById(uid).subscribe((res) => {
      this.selectedPerson = res.result;
      this.modalVisible = true;
    });
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedPerson = null;
  }
}

import { TestBed } from "@angular/core/testing";
import { DepartamentoAPIService } from "./departamento.api.service";

describe('DepartamentoAPIService', () => {
    let service: DepartamentoAPIService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DepartamentoAPIService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
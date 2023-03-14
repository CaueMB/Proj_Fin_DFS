import { TestBed } from "@angular/core/testing";
import { FuncionarioAPIService } from "./funcionario.api.service.sepc";

describe('FuncionarioAPIService', () => {
    let service: FuncionarioAPIService;

    beforeEach(() =>{
        TestBed.configureTestingModule({});
        service = TestBed.inject(FuncionarioAPIService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
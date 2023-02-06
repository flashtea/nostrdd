import { TestBed } from '@angular/core/testing';
import { KeyManagementService } from './key.service';

describe('KeyManagementService', () => {
  let service: KeyManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a valid private key', () => {
    const privKey = service.generatePrivateKey();
    expect(service.isValidPrivateKey(privKey)).toBeTruthy();
  });

  it('should set and get a private key', () => {
    const privKey = service.generatePrivateKey();
    service.setPrivKey(privKey);
    expect(service.getPrivKey()).toEqual(privKey);
  });

  it('should remove a private key', () => {
    const privKey = service.generatePrivateKey();
    service.setPrivKey(privKey);
    service.removePrivKey();
    expect(service.getPrivKey()).toEqual('');
  });

  it('should get a public key', () => {
    const privKey = service.generatePrivateKey();
    service.setPrivKey(privKey);
    const pubKey = service.getPubKey();
    expect(pubKey).toBeTruthy();
  });
});

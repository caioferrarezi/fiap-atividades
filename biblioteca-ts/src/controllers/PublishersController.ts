import { HttpResponse, Request, Response } from "./Http";
import { CreatePublisher } from "../usecases/CreatePublisher";
import { GetPublisher } from "../usecases/GetPublisher";
import { GetPublishers } from "../usecases/GetPublishers";
import { UpdatePublisher } from "../usecases/UpdatePublisher";
import { DeletePublisher } from "../usecases/DeletePublisher";

export class PublishersController {
  constructor(
    private readonly getPublishers: GetPublishers,
    private readonly getPublisher: GetPublisher,
    private readonly createPublisher: CreatePublisher,
    private readonly updatePublisher: UpdatePublisher,
    private readonly deletePublisher: DeletePublisher
  ) {}

  async index(): Promise<Response> {
    const output = await this.getPublishers.execute();
    const publishers = output.publishers.map(publisher => ({
      id: publisher.id,
      name: publisher.name,
      document: publisher.document
    }));
    return HttpResponse.ok(publishers)
  }

  async show(httpRequest: Request): Promise<Response> {
    const id = httpRequest.params.id;
    const output = await this.getPublisher.execute({ id });
    if (!output.publisher) {
      return HttpResponse.notFound(`Publisher not found`);
    }
    return HttpResponse.ok({
      id: output.publisher.id,
      name: output.publisher.name,
      document: output.publisher.document,
    });
  }

  async create(httpRequest: Request): Promise<Response> {
    const output = await this.createPublisher.execute({
      name: httpRequest.body.name,
      document: httpRequest.body.document
    });
    return HttpResponse.created({
      id: output.id
    });
  }

  async update(httpRequest: Request): Promise<Response> {
    const output = await this.updatePublisher.execute({
      id: httpRequest.params.id,
      name: httpRequest.body.name,
      document: httpRequest.body.document
    })
    const publisher = output.publisher;
    return HttpResponse.ok({
      id: publisher.id,
      name: publisher.name,
      document: publisher.document
    });
  }

  async delete(httpRequest: Request): Promise<Response> {
    const output = await this.deletePublisher.execute({ id: httpRequest.params.id });
    return HttpResponse.ok({
      id: output.id
    });
  }
}

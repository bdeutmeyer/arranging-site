import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

export default function Contact() {
    return (
        <>
            <div>
                <h1>
                    Contact Beth
                </h1>
                <h4>
                    Comments? Questions? Requests? Submit them below.
                </h4>
            </div>
            <Form>
                <FormGroup>
                    <Label for="userName">
                        Name
                    </Label>
                    <Input
                        id="userName"
                        name="name"
                        placeholder="ex. Beth Deutmeyer"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="userEmail">
                        Email
                    </Label>
                    <Input
                        id="userEmail"
                        name="email"
                        placeholder="ex. deutmeyerfan@email.com"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="textBox">
                        Message
                    </Label>
                    <Input
                        id="textBox"
                        name="text"
                        placeholder="ex. Beth Deutmeyer is my favorite arranger EVER! I can't wait to buy her entire catalog!"
                        type="textarea"
                    />
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        </>
    );
}
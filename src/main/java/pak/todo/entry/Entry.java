package pak.todo.entry;


import jakarta.persistence.*;


import java.util.Date;

@Entity
public class Entry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long entryId;

    private String message;
    private boolean status;
    private Date due;

    public Entry() {

    }

    public Entry(String message, boolean status, Date due) {
        this.message = message;
        this.status = status;
        this.due = due;
    }


    public long getEntryId() {
        return entryId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Date getDue() {
        return due;
    }

    public void setDue(Date due) {
        this.due = due;
    }
}

package pak.todo.entry;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@WebMvcTest(EntryController.class)
@AutoConfigureMockMvc
public class EntryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    EntryService entryService;

    @Autowired
    private ObjectMapper objectMapper;




}

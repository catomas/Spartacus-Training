package com.taloscommerce.webservices.v2.controller;


import com.taloscommerce.core.event.TrainingFormEmailEvent;



import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.servicelayer.event.EventService;
import io.swagger.annotations.Api;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import com.taloscommerce.webservices.v2.forms.TrainingForm;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.Resource;

@Controller
@RequestMapping(value = "/formEmail")
@Api(tags = "Form Email")
public class TrainingFormEmailController extends BaseController {

    @Resource(name = "eventService")
    private EventService eventService;

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "baseSiteService")
    private BaseSiteService baseSiteService;

    @Resource(name = "baseStoreService")
    private BaseStoreService baseStoreService;

    @Resource(name = "commonI18NService")
    private CommonI18NService commonI18NService;


    @GetMapping
    public void sendEmail(final TrainingForm form, Model model, final RedirectAttributes redirectAttributes)
            throws CMSItemNotFoundException {

        TrainingFormEmailEvent event = new TrainingFormEmailEvent();


            event.setBaseStore(baseStoreService.getCurrentBaseStore());
            event.setSite(baseSiteService.getCurrentBaseSite());
            event.setCustomer((CustomerModel) userService.getCurrentUser());
            event.setLanguage(commonI18NService.getCurrentLanguage());
            event.setMailTo(form.getMailTo());
            event.setMailSubject(form.getMailSubject());
            event.setMessage(form.getMessage());
            eventService.publishEvent(event);



    }


}
